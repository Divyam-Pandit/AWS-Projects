import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('serverless-form')

def lambda_handler(event, context):
    # print(event)
    
    # Check if email already exists in the table using `get` method
    existing_item = table.get_item(Key={'email': event['email']})
    # print(existing_item)
    # Check if the "Item" key exists in the returned dictionary
    if 'Item' in existing_item:
        # print('unsucessful')
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'email already registered', 'message': 'Registration failed'})
        }
    else:
        response = table.put_item(
            Item = {
            'email':event['email'],
            'name':event['name'],
            'phone':event['phone'],
            'intro':event['intro']
        })
        # print('successful')
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'message': 'Registration successful!'})
        }
