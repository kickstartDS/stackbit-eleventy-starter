import { DynamicComponent } from '../components/DynamicComponent';
import { Footer } from '../components/Footer';
import '../styles/styles.css';

export const data = {
    layout: 'base.njk'
};

export default (props) => {
    const { page, sections, config } = props;
    return (
        <div className="page">
            <div data-sb-object-id={page.inputPath.slice(2)}>
                {sections?.length > 0 && (
                    <div data-sb-field-path="sections">
                        {sections.map((section, index) => (
                            <DynamicComponent key={index} {...section} data-sb-field-path={`.${index}`} />
                        ))}
                    </div>
                )}
            </div>
            <Footer config={config} />
        </div>
    );
};
