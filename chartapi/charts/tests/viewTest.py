import unittest
from rest_framework.test import APIRequestFactory, force_authenticate
from .views import candleStickData, lineChartData, barChartData, pieChartData

class ChartApiTests(unittest.TestCase):

  def setUp(self):
    self.factory = APIRequestFactory()

  def test_candleStickData(self):
    request = self.factory.get('/candlestick-data/')
    response = candleStickData(request)
    self.assertEqual(response.status_code, 200)
    self.assertIn('data', response.data)
    self.assertEqual(len(response.data['data']), 31)

  def test_lineChartData(self):
    request = self.factory.get('/line-chart-data/')
    response = lineChartData(request)
    self.assertEqual(response.status_code, 200)
    self.assertIn('labels', response.data)
    self.assertIn('data', response.data)
    self.assertEqual(len(response.data['labels']), 10)
    self.assertEqual(len(response.data['data']), 10)

  def test_barChartData(self):
    request = self.factory.get('/bar-chart-data/')
    response = barChartData(request)
    self.assertEqual(response.status_code, 200)
    self.assertIn('labels', response.data)
    self.assertIn('data', response.data)
    self.assertEqual(len(response.data['labels']), 10)
    self.assertEqual(len(response.data['data']), 10)

  def test_pieChartData(self):
    request = self.factory.get('/pie-chart-data/')
    response = pieChartData(request)
    self.assertEqual(response.status_code, 200)
    self.assertIn('labels', response.data)
    self.assertIn('data', response.data)
    self.assertEqual(len(response.data['labels']), 13)
    self.assertEqual(len(response.data['data']), 13)

if __name__ == '__main__':
  unittest.main()