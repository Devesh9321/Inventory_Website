import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

# from flaskr.db import get_db

bp = Blueprint('shop', __name__, url_prefix='/shop')


@bp.route('/', methods=('GET', 'POST'))
def shop():
    return render_template('/shop.html')

@bp.route('/ProductDetails', methods=('GET', 'POST'))
def productdetails():
    return render_template('/product_details.html')