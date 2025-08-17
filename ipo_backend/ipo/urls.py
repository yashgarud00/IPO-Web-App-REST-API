from rest_framework.routers import DefaultRouter
from .views import IPOViewSet

router = DefaultRouter()
router.register(r'', IPOViewSet, basename='ipo')

urlpatterns = router.urls
