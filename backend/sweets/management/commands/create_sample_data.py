from django.core.management.base import BaseCommand
from sweets.models import Sweet
from inventory.models import Inventory
import random

class Command(BaseCommand):
    help = 'Create sample sweets data'

    def handle(self, *args, **kwargs):
        # Sample sweet data
        sample_sweets = [
            {
                'name': 'Chocolate Truffle',
                'description': 'Rich dark chocolate truffle with a smooth ganache center',
                'price': 2.50,
                'category': 'chocolates'
            },
            {
                'name': 'Strawberry Cupcake',
                'description': 'Vanilla cupcake topped with fresh strawberry frosting',
                'price': 3.25,
                'category': 'cupcakes'
            },
            {
                'name': 'Rainbow Lollipop',
                'description': 'Colorful swirl lollipop with fruity flavors',
                'price': 1.75,
                'category': 'lollipops'
            },
            {
                'name': 'Caramel Popcorn',
                'description': 'Crispy popcorn coated with sweet caramel',
                'price': 4.50,
                'category': 'popcorn'
            },
            {
                'name': 'Gummy Bears',
                'description': 'Chewy fruit-flavored gummy bears in assorted colors',
                'price': 2.00,
                'category': 'gummies'
            },
            {
                'name': 'Red Velvet Cake',
                'description': 'Classic red velvet cake with cream cheese frosting',
                'price': 5.75,
                'category': 'cakes'
            },
            {
                'name': 'Mint Chocolate',
                'description': 'Refreshing mint chocolate with dark chocolate coating',
                'price': 2.25,
                'category': 'chocolates'
            },
            {
                'name': 'Blueberry Muffin',
                'description': 'Fresh blueberry muffin with crumbly topping',
                'price': 3.50,
                'category': 'muffins'
            }
        ]

        # Create sweets and inventory
        for sweet_data in sample_sweets:
            sweet, created = Sweet.objects.get_or_create(
                name=sweet_data['name'],
                defaults=sweet_data
            )
            
            if created:
                # Create inventory for each sweet
                Inventory.objects.get_or_create(
                    sweet=sweet,
                    defaults={
                        'quantity': random.randint(10, 50),
                        'min_quantity': 5
                    }
                )
                self.stdout.write(
                    self.style.SUCCESS(f'Created sweet: {sweet.name}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Sweet already exists: {sweet.name}')
                )

        self.stdout.write(
            self.style.SUCCESS('Sample data creation completed!')
        )