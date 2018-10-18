import { ApolloLink, Operation, Observable, NextLink } from 'apollo-link';
import { ExecutionResult } from 'graphql';
export interface ObservableValue {
    value?: ExecutionResult | Error;
    delay?: number;
    type: 'next' | 'error' | 'complete';
}
export interface Unsubscribable {
    unsubscribe: () => void;
}
export interface NextEvent {
    type: 'next';
    delay?: number;
    value: ExecutionResult;
}
export interface ErrorEvent {
    type: 'error';
    delay?: number;
    value: Error;
}
export interface CompleteEvent {
    type: 'complete';
    delay?: number;
}
export declare type ObservableEvent = NextEvent | ErrorEvent | CompleteEvent;
export declare class TestLink extends ApolloLink {
    operations: Operation[];
    constructor();
    request(operation: Operation): Observable<{}>;
}
export declare class TestSequenceLink extends ApolloLink {
    operations: Operation[];
    constructor();
    request(operation: Operation, forward: NextLink): Observable<{}>;
}
export declare function mergeObservables(...observables: Observable<ExecutionResult>[]): Observable<{}>;
export declare function toResultValue(e: ObservableEvent): ObservableEvent;
export declare const assertObservableSequence: (observable: Observable<ExecutionResult>, sequence: ObservableValue[], initializer?: (sub: Unsubscribable) => void) => Promise<boolean | Error>;
