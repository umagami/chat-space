# README

## user

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|password_confirmation|string|null: false|

## group

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|member_name|string|null: false|

## message

|Column|TYpe|Option|
|------|----|------|
|content|string|null: false|
|image|string|



### Association
- has_many :messages