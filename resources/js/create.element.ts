/**
 *
 * @param {string} tag
 * @param {Partial<HTMLElement>} props
 * @param  {...(HTMLElement|string)} children
 * @returns
 */
export function createElement(tag, props, ...children) {
    const res = document.createElement(tag);
    if (props)
        Object.keys(props).forEach((prop) => {
            if (prop === "classList" || prop === "className") {
                if (props[prop] === "" || props[prop] === null) return;
                res.classList.add(...props[prop].split(" "));
                return;
            } else if (prop === "style") {
                const style = props[prop];
                for (const key in style)
                    if (typeof res.style[key] === "undefined")
                        res.style.setProperty(key, style[key]);
                    else res.style[key] = style[key];

                return;
            } else if (prop === "attributes") {
                const attributes = props[prop];
                for (const key in attributes)
                    if (attributes[key])
                        res.setAttribute(key, attributes[key]);

                return;
            } else if (
                res[prop.toLowerCase()] === null &&
                prop.toLowerCase().startsWith("on")
            ) {
                res.addEventListener(
                    prop.toLowerCase().replace("on", ""),
                    props[prop],
                );
                return;
            }
            res[prop] = props[prop];
        });
    if (children)
        res.append(...children.flat().filter((child) => child !== null));
    return res;
}