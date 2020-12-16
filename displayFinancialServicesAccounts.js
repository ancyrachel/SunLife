import { LightningElement,track,wire } from 'lwc';
import {createRecord, getRecord } from "lightning/uiRecordApi";
import getAccounts from '@salesforce/apex/AccountData.getAccounts';

const fieldArray=['Account.Name','Account.Owner','Account.Phone','Account.website','Account.Revenue'];

export default class DisplayFinancialServicesAccounts extends LightningElement {
    @api recordId;
    @wire(getAccounts, {Industry:'$Industry' })
      accounts;
}