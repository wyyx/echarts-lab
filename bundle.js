System.register("test", [], function (exports_1, context_1) {
    "use strict";
    var testStr;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("testStr", testStr = "houdini");
        }
    };
});
System.register("main", ["test"], function (exports_2, context_2) {
    "use strict";
    var test_1, mainEl, myChart;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            }
        ],
        execute: function () {
            console.log('TCL: testStr', test_1.testStr);
            mainEl = document.getElementById('main');
            // initialize echarts instance with prepared DOM
            myChart = echarts.init(mainEl);
            // draw chart
            myChart.setOption({
                title: {
                    text: 'ECharts entry example',
                },
                tooltip: {},
                xAxis: {
                    data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
                },
                yAxis: {},
                series: [
                    {
                        name: 'sales',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHMvdGVzdC50cyIsInRzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHFCQUFhLE9BQU8sR0FBRyxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztZQ0dqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFPLENBQUMsQ0FBQTtZQUU5QixNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQW1CLENBQUE7WUFFaEUsZ0RBQWdEO1lBQzVDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRWxDLGFBQWE7WUFDYixPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNoQixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLHVCQUF1QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO2lCQUN2RTtnQkFDRCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUU7b0JBQ047d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7cUJBQzlCO2lCQUNGO2FBQ2MsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlc3RTdHIgPSBcImhvdWRpbmlcIjtcclxuIiwiaW1wb3J0IHsgdGVzdFN0ciB9IGZyb20gJy4vdGVzdCdcclxuaW1wb3J0IHsgRUNoYXJ0T3B0aW9uIH0gZnJvbSAnZWNoYXJ0cydcclxuXHJcbmNvbnNvbGUubG9nKCdUQ0w6IHRlc3RTdHInLCB0ZXN0U3RyKVxyXG5cclxuY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSBhcyBIVE1MRGl2RWxlbWVudFxyXG5cclxuLy8gaW5pdGlhbGl6ZSBlY2hhcnRzIGluc3RhbmNlIHdpdGggcHJlcGFyZWQgRE9NXHJcbnZhciBteUNoYXJ0ID0gZWNoYXJ0cy5pbml0KG1haW5FbClcclxuXHJcbi8vIGRyYXcgY2hhcnRcclxubXlDaGFydC5zZXRPcHRpb24oe1xyXG4gIHRpdGxlOiB7XHJcbiAgICB0ZXh0OiAnRUNoYXJ0cyBlbnRyeSBleGFtcGxlJyxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHt9LFxyXG4gIHhBeGlzOiB7XHJcbiAgICBkYXRhOiBbJ3NoaXJ0JywgJ2NhcmRpZ24nLCAnY2hpZmZvbiBzaGlydCcsICdwYW50cycsICdoZWVscycsICdzb2NrcyddLFxyXG4gIH0sXHJcbiAgeUF4aXM6IHt9LFxyXG4gIHNlcmllczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2FsZXMnLFxyXG4gICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgZGF0YTogWzUsIDIwLCAzNiwgMTAsIDEwLCAyMF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0gYXMgRUNoYXJ0T3B0aW9uKVxyXG4iXX0=