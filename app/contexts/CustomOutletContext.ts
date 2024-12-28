import { useOutletContext } from "@remix-run/react"

export interface MessageProps {
    message?: string;
    setMessage: (message?: string) => void;
}

export function useNewCustomOutletContext(setMessage: (message?: string) => void, message?: string): MessageProps {
    return {
        message,
        setMessage
    }
}

export function useExistingCustomOutletContext(): MessageProps {
    return useOutletContext<MessageProps>();
}