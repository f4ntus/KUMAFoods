#pragma checksum "C:\temp\KUMAfoodsNew\KUMAFoods\KumaFoodsDotNet\ServerApp\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7d802f24c6f245c319b429f8bbd707fc3a936916"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\temp\KUMAfoodsNew\KUMAFoods\KumaFoodsDotNet\ServerApp\Views\_ViewImports.cshtml"
using ServerApp;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\temp\KUMAfoodsNew\KUMAFoods\KumaFoodsDotNet\ServerApp\Views\_ViewImports.cshtml"
using ServerApp.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7d802f24c6f245c319b429f8bbd707fc3a936916", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"96711a00a324d5aa3ac613ff6e711257340ab38f", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n    <script src=\"runtime.js\"></script>\r\n    <script src=\"polyfills.js\"></script>\r\n    <script src=\"styles.js\"></script>\r\n    <script src=\"vendor.js\"></script>\r\n    <script src=\"main.js\"></script>\r\n");
            }
            );
            WriteLiteral("<p> test</p>\r\n<div id=\"data\" class=\"p-1 bg-warning\">\r\n    ");
#nullable restore
#line 10 "C:\temp\KUMAfoodsNew\KUMAFoods\KumaFoodsDotNet\ServerApp\Views\Home\Index.cshtml"
Write(Json.Serialize(Model));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n</div>\r\n<app-root></app-root>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
