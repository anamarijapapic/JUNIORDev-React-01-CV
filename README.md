### Digitalna Dalmacija JUNIORDev React 2024

# Praktični rad 1

## Zadatak

Napravite stranicu koja može poslužiti kao životopis (CV) i koja izgleda slično kao primjer na slici ispod. Cilj vježbe nije imati identičan dizajn kao na primjeru, već pokušati iskoristiti nove koncepte prilikom izrade stranice. Na primjeru je korišten fiktivni lik ali po želji možete napraviti i stranicu koja će služiti kao vaš vlastiti CV i kasnije je nadograđivat. Fokus ovog zadatka je kako pristupiti izradi stranice - kod klasičnog HTML-a, vjerojatno bi nam cijela struktura stranice bila unutar jedne HTML datoteke. Vidjeli smo da kod React-a koristimo komponente i zapravo stranicu "razbijamo" na manje elemente. Sada je na vama da pokušate osmisliti način kako bi jednu stranicu ovog oblika razlomili u komponente. Nekoliko savjeta koji bi vam mogli pomoći pri izradi:

- prvi korak bi bio napraviti novu komponentu "Zivotopis" koju ćemo prikazati unutar već postojeće "App" komponente (izbrišite Pozdrav komponentu i sve ostalo nepotrebno)
- ako ste navikli na HTML, prvo možete u jednoj komponenti (Zivotopis) definirati cijelu strukturu kao da radite običnu stranicu. Nakon toga uočite koji dijelovi HTML-a se ponavljaju - to su potencijalni kandidati za izdvajanje u komponentu
- uvijek vodite računa da ne pretjerate sa "usitnjavanjem" u komponente ali isto tako i da svaka komponenta ima jasno definiranu svrhu (kako bi se mogla potencijalno ponovo upotrijebiti)
- sjetite se da komponente možemo prikazivati jedne unutar drugih i da child komponenti možemo slati podatke pomoću props-a

## Primjer rješenja

![Primjer rješenja](https://github.com/anamarijapapic/JUNIORDev-React-01-CV/assets/92815435/4f7ba558-8b1f-40a5-89dc-06b3822d4c12)
