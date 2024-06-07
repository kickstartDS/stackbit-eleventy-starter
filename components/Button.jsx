export const Button = (props) => {
    return (
        <a href={props.url ?? '/'} className={`button theme-${props.theme}`} data-sb-field-path={props['data-sb-field-path']}>
            <span data-sb-field-path=".label">{props.label}</span>
        </a>
    );
};
