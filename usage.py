from typing import List, Union

from dash.development.base_component import Component
import dash_editable_div
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)


def _prepare_editable_div_value() -> List[Union[Component, str]]:
    return [html.H1('This is and editable title'), html.P('This is an editable paragraph.')]


app.layout = html.Div(
    [
        dash_editable_div.EditableDiv(
            id='input',
            children=_prepare_editable_div_value(),
            className='text',
            style={'padding': '10px', 'border': '1px solid rgba(0,0,0,.1)', 'border-radius': '5px'},
        ),
        html.Div(id='output'),
    ]
)


@app.callback(Output('output', 'children'), [Input('input', 'value')], prevent_initial_call=True)
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
