import React from 'react'
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: props.error };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ paddingLeft: '2%' }}>
                    <h3>Error</h3>
                    <p>{JSON.stringify(this.state.error)}</p>
                </div>
            )
        }

        return this.props.children;
    }
}