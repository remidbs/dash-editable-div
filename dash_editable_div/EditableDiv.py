# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class EditableDiv(Component):
    """An EditableDiv component.
EditableDiv is div component with editable
content storing its innerHTML in the state.

Keyword arguments:
- children (dict; optional): The chilren components
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (string; optional): The div innerHTML.
- className (string; optional): Often used with CSS to style elements with common properties.
- style (dict; optional): Defines CSS styles which will override styles previously set."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'value', 'className', 'style']
        self._type = 'EditableDiv'
        self._namespace = 'dash_editable_div'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'value', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(EditableDiv, self).__init__(children=children, **args)
