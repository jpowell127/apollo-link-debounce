import { ApolloLink, Observable, Operation, NextLink } from 'apollo-link';
export default class DebounceLink extends ApolloLink {
    private debounceInfo;
    private defaultDelay;
    constructor(defaultDelay: number);
    request(operation: Operation, forward: NextLink): Observable<{}>;
    private setupDebounceInfo;
    private enqueueRequest;
    private cleanup;
    private flush;
    private unsubscribe;
}
