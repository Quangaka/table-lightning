import { Column } from "../models/Table/Column.model";

export const userTableConfigs: Column[] = [
    {
        'fieldName': 'id',
        'type': 'text',
        'label': 'ID',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'contact_date',
        'type': 'text',
        'label': 'Contact Date',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'business_name',
        'type': 'text',
        'label': 'Business Name',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'start_date',
        'type': 'text',
        'label': 'Start Date',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'payment_type',
        'type': 'text',
        'label': 'Payment Type',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'contact_name',
        'type': 'text',
        'label': 'Contact Name',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'phone_number',
        'type': 'text',
        'label': 'Phone Number',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'email',
        'type': 'text',
        'label': 'Email',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'reverse_amount',
        'type': 'text',
        'label': 'Reverse Amount',
        'defaultType': 'number',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'reverse_balance',
        'type': 'text',
        'label': 'Account Reverse Balance',
        'defaultType': 'number',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'balance_due',
        'type': 'text',
        'label': 'Balance Due',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'status',
        'type': 'badge',
        'label': 'Status',
        'defaultType': 'string',
        'sortable': true,
        'direction': null,
        'contentAlignment': 'center'
    },
    {
        'fieldName': 'profile',
        'type': 'avatar',
        'label': 'Profile',
        'defaultType': 'string',
        'sortable': false,
        'direction': null,
        'contentAlignment': 'center'
    },
]