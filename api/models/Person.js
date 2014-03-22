/**
 * Person
 *
 * @module      :: Model
 * @description :: The basic person, will be referenced as customer or business contact
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        firstname: 'string',
  	     lastname: {
             type: 'string',
             required: true
         },
        title: 'string',
        phone: 'string',
          fax: 'string',
        email: {
            type: 'email',
            required: true
        },
        skype: 'string',
        google: {
            type: 'email'
        },
        jabber: {
            type: 'email'
        },
        address: {
            type: 'text',
            required: true
        },
        prefferedLanguage: {
            type: 'string',
            defaultsTo: 'german'
        },
        taxNumber: 'string',
             iban: {
                 type: 'string',
            maxLength: 27,
            minLength: 20
              },
              bic: {
                 type: 'string',
            maxLength: 11,
            minLength: 8
              }
    }
};
