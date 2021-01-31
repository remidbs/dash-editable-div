import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * EditableDiv is div component with editable
 * content storing its innerHTML in the state.
 */
export default class EditableDiv extends Component {
    render() {
        const {id, setProps, children, style, className} = this.props;
        return (
            <div
                id={id}
                contentEditable
                style={style}
                className={className}
                suppressContentEditableWarning={true}
                onInput={(e) => setProps({value: e.target.innerHTML})}
            >
                {children}
            </div>
        );
    }
}

EditableDiv.defaultProps = {};

EditableDiv.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The div innerHTML.
     */
    value: PropTypes.string,

    /**
     * The chilren components
     */
    children: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,
};
