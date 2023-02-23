import {Environments} from './Environments';
export const ENVIRONMENT = {
    [Environments.DEV]:{
        LOGIN_URL:'https://ag-dev.mymitchell.com/enterprise/authorization/login?app=connect',
        USER:{
            FULL_ACCESS_USER:{
                username:'mcradmin',
                password:'password'
            },
            READ_ACCESS_USER:{
                username:'mcradmin',
                password:'password'
            }
        }
    },
    [Environments.QA]:{
        LOGIN_URL:'https://ag-qa.mymitchell.com/enterprise/authorization/login?app=connect',
        USER:{
            FULL_ACCESS_USER:{
                username:'mcrautomation',
                password:'password'
            },
            READ_ACCESS_USER:{
                username:'MCRSTANDARD01',
                password:'password'
            }
        }
    }
}

