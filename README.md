# README

## users

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|password_confirmation|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## groups

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
||string|null: false|

### Associations
- has_many :users
- has_many :users, through: :groups_users


## messages

|Column|TYpe|Option|
|------|----|------|
|content|string|null: false|
|image|string|null: false|


### Association
- belongs_to :user


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user