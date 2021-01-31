# AUTO GENERATED FILE - DO NOT EDIT

export ded_editablediv

"""
    ded_editablediv(;kwargs...)
    ded_editablediv(children::Any;kwargs...)
    ded_editablediv(children_maker::Function;kwargs...)


An EditableDiv component.
EditableDiv is div component with editable
content storing its innerHTML in the state.
Keyword arguments:
- `children` (Dict; optional): The chilren components
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `value` (String; optional): The div innerHTML.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
"""
function ded_editablediv(; kwargs...)
        available_props = Symbol[:children, :id, :value, :className, :style]
        wild_props = Symbol[]
        return Component("ded_editablediv", "EditableDiv", "dash_editable_div", available_props, wild_props; kwargs...)
end

ded_editablediv(children::Any; kwargs...) = ded_editablediv(;kwargs..., children = children)
ded_editablediv(children_maker::Function; kwargs...) = ded_editablediv(children_maker(); kwargs...)

