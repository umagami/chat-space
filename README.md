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





データベース設計

アプリを触って情報の保存が行われている場面を全て洗い出す
=>必要なテーブルの数を考える
新しく送るデータについてはテーブルを用意する。
①ユーザー新規登録 usersテーブル
②グループ作成    groupsテーブル
③メッセージ送信  messagesテーブル

※chat-space,slackのデータベース設計


カラム名を考える

userの何を保存するのか？？
name, email, password, password_confirmation

groupの何を保存するのか？？
name, (member_name)

messageの何を保存するのか？？
content, image
