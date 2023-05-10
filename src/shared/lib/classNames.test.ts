import { classNames } from './classNames';

describe('className', () => {
    test('should work with one static class', () => {
        const result = classNames('someClass');
        expect(result).toBe('someClass');
    });
    test('should work with one static class and one dynamic class', () => {
        const result = classNames('someClass', {}, ['dynamicClass']);
        expect(result).toBe('someClass dynamicClass');
    });
    test('should work with mods', () => {
        const result = classNames('someClass', { dynamicClass: true }, ['additionalClass']);
        expect(result).toBe('someClass additionalClass dynamicClass');
    });
});
