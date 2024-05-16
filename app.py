import flask
import Application as Machine


if __name__ == '__main__':
    app = Machine.create_app()
    app.run(
        host='0.0.0.0',
        port=8080
    )
