import Markdown from 'markdown-to-jsx';

export const Footer = ({ config }) => {
    const footerObjectId = 'content/data/config.json:footer';
    return (
        <footer className="footer outer" data-sb-field-path={footerObjectId}>
            <div className="footer-container inner">
                <Markdown className="footer-content" data-sb-field-path=".body">
                    {config.footer.body}
                </Markdown>
            </div>
        </footer>
    );
};
