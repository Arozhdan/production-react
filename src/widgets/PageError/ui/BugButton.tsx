import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const throwError = () => setError(true);
    useEffect(() => {
        if (!error) return;
        throw new Error();
    }, [error]);
    return (
        <Button onClick={throwError} className={classNames(className, {}, [])}>
            Throw error
        </Button>
    );
};
