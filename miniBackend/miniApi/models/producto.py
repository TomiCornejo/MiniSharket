from django.db import models

from .proveedor import Proveedor
from .categoria import Categoria
from .unidad import Unidad
from .usuario import Usuario

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    stock = models.FloatField()
    precio = models.PositiveIntegerField()
    nVentas = models.PositiveBigIntegerField()
    img = models.ImageField(blank=True,default="",upload_to='img/')
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    unidad = models.ForeignKey(Unidad,on_delete=models.DO_NOTHING)
    proveedor = models.ForeignKey(Proveedor,on_delete=models.DO_NOTHING,blank=True,default="",null=True)
    categorias = models.ManyToManyField(Categoria,blank=True,default="")