using System.Web;
using System.Web.Optimization;

namespace DisneyWebApplication
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.10.2.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-2.6.2.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.min.js",
                      "~/Scripts/respond.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/datetimepicker.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                    "~/Scripts/moment.js",
                    "~/Scripts/angular.min.js",
                    "~/Scripts/datetimepicker.js",
                    "~/Scripts/datetimepicker.templates.js",
                    "~/Scripts/Chart.min.js",
                    "~/Scripts/angular-chart.min.js",
                    "~/Scripts/angular-filter.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                   "~/App/app.js",
                   "~/App/services/attractionsServices.js",
                   "~/App/directives/attractionsList.js",
                   "~/App/directives/chartDirective.js",
                   "~/App/directives/attractionsAggregate.js",
                   "~/App/models/attraction.js",
                    "~/App/shared/httpInterceptor.js"
           ));

        }
    }
}
