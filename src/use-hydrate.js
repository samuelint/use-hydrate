"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHydrate = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
function useHydrate({ initial, action, selector }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((action(initial)));
        // Only at first render
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (0, react_redux_1.useSelector)(selector);
}
exports.useHydrate = useHydrate;
