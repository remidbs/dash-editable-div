
module DashEditableDiv
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("ded_editablediv.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_editable_div",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_editable_div.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_editable_div.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
