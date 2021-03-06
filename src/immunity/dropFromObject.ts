import objectAssign from '../ponyfills/objectAssign';

function dropFromObject(instance: any, n: number): any {
    const keys = Object.keys(instance);

    let index = 0;

    return keys.reduce(
        (obj, itemKey) => {
            if (n > index) {
                index += 1;

                return obj;
            }

            return objectAssign({}, obj, {
                [itemKey]: instance[itemKey],
            });
        },
        {},
    );
}

export {
    dropFromObject as default,
};
