import { ApolloError } from "apollo-server";

export const removePlus = (param: string): string => {
    return param.replace("+", "");
};

export class InternalServerError extends ApolloError {
    constructor(message: string) {
        super(message, 'INTERNAL_SERVER_ERROR');

        Object.defineProperty(this, 'name', {
            value: 'InternalServerError',
        });
    }
}

export class DataNotFoundError extends ApolloError {
    constructor(message: string) {
        super(message, 'DATA_NOT_FOUND');

        Object.defineProperty(this, 'name', {
            value: 'DataNotFoundError',
        });
    }
}

export class EmptyDataError extends ApolloError {
    constructor(message: string) {
        super(message, 'EMPTY_DATA');

        Object.defineProperty(this, 'name', {
            value: 'EmptyDataError',
        });
    }
}

export class UnprocessAbleEntityError extends ApolloError {
    constructor(message: string) {
        super(message, 'UNPROCESSABLE_ENTITY');

        Object.defineProperty(this, 'name', {
            value: 'UnprocessAbleEntityError',
        });
    }
}