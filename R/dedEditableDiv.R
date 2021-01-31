# AUTO GENERATED FILE - DO NOT EDIT

dedEditableDiv <- function(children=NULL, id=NULL, value=NULL, className=NULL, style=NULL) {
    
    props <- list(children=children, id=id, value=value, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'EditableDiv',
        namespace = 'dash_editable_div',
        propNames = c('children', 'id', 'value', 'className', 'style'),
        package = 'dashEditableDiv'
        )

    structure(component, class = c('dash_component', 'list'))
}
