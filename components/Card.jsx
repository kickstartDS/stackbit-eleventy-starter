import Markdown from 'markdown-to-jsx';

export const Card = (props) => {
    return (
        <a href={props.url ?? '/'} className="card" data-sb-field-path={props['data-sb-field-path']}>
            {props.heading && (
                <h3 className="card-heading" data-sb-field-path=".heading">
                    {props.heading}
                </h3>
            )}
            {props.subheading && (
                <Markdown className="card-subheading" data-sb-field-path=".subheading">
                    {props.subheading}
                </Markdown>
            )}
        </a>
    );
};
