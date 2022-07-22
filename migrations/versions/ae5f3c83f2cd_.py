"""empty message

Revision ID: ae5f3c83f2cd
Revises: 
Create Date: 2022-07-22 16:48:42.599256

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae5f3c83f2cd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('country',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('lastName', sa.String(length=120), nullable=False),
    sa.Column('phonenumber', sa.String(length=120), nullable=False),
    sa.Column('birthdate', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('companies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('location', sa.String(length=80), nullable=False),
    sa.Column('country_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('snowparks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('resort', sa.String(length=80), nullable=False),
    sa.Column('location', sa.String(length=80), nullable=False),
    sa.Column('shapers', sa.Integer(), nullable=False),
    sa.Column('bullydrivers', sa.Integer(), nullable=False),
    sa.Column('country_id', sa.Integer(), nullable=False),
    sa.Column('companies_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['companies_id'], ['companies.id'], ),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('jobs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('snowparks_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['snowparks_id'], ['snowparks.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('jobs')
    op.drop_table('snowparks')
    op.drop_table('companies')
    op.drop_table('user')
    op.drop_table('country')
    # ### end Alembic commands ###