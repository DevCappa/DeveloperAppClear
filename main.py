
from Crypto.Random import get_random_bytes
from beembase.operations import Custom_json
from beem.transactionbuilder import TransactionBuilder
from flask import Flask, request, jsonify
from Crypto.Cipher import AES
import json
from beembase.operations import Custom_json
from beem import Hive
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from decouple import Config
from dotenv import load_dotenv
from decouple import Config
import binascii

load_dotenv()
config = Config('.env')
KEY_JWT = config('KEY_JWT')
DEBUG = config('DEBUG', default=False, cast=bool)
KEY=config('KEY')
USER=config('user')
POSTING_KEY=config('posting_key')
USER_LOGIN=config('usuario_login')
PASSWORD_LOGIN=config('pasword_login')
key_hex = config('KEY')

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'KEY_JWT'  
jwt = JWTManager(app)
key = binascii.unhexlify(key_hex)

@app.route('/subir_custom_json', methods=['POST'])
@jwt_required()
def subir_custom_json():
    try:
        data = request.json

        if data is None:
            return jsonify({"error": "El cuerpo de la solicitud no contiene datos JSON"})

        data_json = json.dumps(data)
        data_bytes = data_json.encode('utf-8')
        cipher = AES.new(key, AES.MODE_EAX)
        ciphertext, tag = cipher.encrypt_and_digest(data_bytes)
        user = USER
        posting_key = POSTING_KEY

        if user is None or posting_key is None:
            return jsonify({"error": "Los campos de credencial estan vacios"})
        custom_data = {
            "encrypted_data": ciphertext.hex(),
            "tag": tag.hex()
        }

        client = Hive(keys={'posting': POSTING_KEY})
        custom_json_data = {
            "required_auths": [],
            "required_posting_auths": [user],
            "id": "remorapp",
            "app":"remorapp",
            "json": json.dumps(custom_data)
        }

        tx = TransactionBuilder(blockchain_instance=client)
        tx.appendOps(Custom_json(custom_json_data))
        tx.appendWif(posting_key) 
        tx.sign()
        tx.broadcast()

        return jsonify({"message": "JSON personalizado cargado en Hive exitosamente"})
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/obtener_formulario/<string:custom_json_id>', methods=['GET'])
def obtener_formulario(custom_json_id):
    posting_key = POSTING_KEY
    try:
        account_name = USER
        client = Hive(keys={'posting': posting_key})
        custom_json = client.custom_json(account_name, custom_json_id)
        
        if custom_json:
            account_name = "remorapp"
            encrypted_data = bytes.fromhex(custom_json.get("encrypted_data"))
            tag = bytes.fromhex(custom_json.get("tag"))
            cipher = AES.new(key, AES.MODE_EAX, nonce=tag)
            decrypted_data = cipher.decrypt(encrypted_data)
            
            return jsonify({"formulario": decrypted_data.decode('utf-8')})
        
        return jsonify({"message": "Formulario no encontrado en Hive"})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/login', methods=['POST'])
def login():
    # Verificar las credenciales del usuario y autenticar
    username = request.json.get('username')
    password = request.json.get('password')
    
    # Realizar la autenticación y verificar las credenciales
    if username == USER_LOGIN  and password == PASSWORD_LOGIN:
        # Generar un token de acceso
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"error": "Credenciales inválidas"}), 401


if __name__ == '__main__':
    app.run(debug=True)
