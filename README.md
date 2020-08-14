# README

## user

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|password_confirmation|string|null: false|

### Association
- has_many :messages
- has_many :groups

## group

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|member_name|string|null: false|

### Association
- has_many :users



## message

|Column|TYpe|Option|
|------|----|------|
|content|string|null: false|
|image|string|


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