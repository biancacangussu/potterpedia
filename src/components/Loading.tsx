import { Spinner } from "@nextui-org/react";

export function Loading() {
    return (
        <div className="flex justify-center h-[90vh]">
            <Spinner className="align-middle" color="secondary" />
        </div>
    );
}