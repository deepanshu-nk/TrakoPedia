class config:
    SECRET_KEY = 'super-secret'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///trako.db'
    
    # Corrected casing and prefix to uppercase
    SECURITY_PASSWORD_HASH = 'bcrypt'
    SECURITY_PASSWORD_SALT = 'super-secret-salt'
    
    WTF_CSRF_ENABLED = False
    SECURITY_TOKEN_AUTHENTICATION_HEADER = 'Authorization'