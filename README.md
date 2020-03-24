## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|email|integer|null: false, unique:true|
|password|string|null: false|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :messages