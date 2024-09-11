from django.urls import path 
from .views import candleStickData, lineChartData, pieChartData, barChartData

urlpatterns = [
  path("candlestick-data/" , candleStickData , name ="candlestick-data"),
  path("line-chart-data/" , lineChartData , name ="linechart-data"),
  path("pie-chart-data/" , pieChartData , name ="piechart-data"),
  path("bar-chart-data/" , barChartData , name ="barchart-data")
]
