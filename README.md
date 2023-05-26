# AroundTheWorld
Aceasta pagina reprezinta codul sursa pentru website (client si server).

# Link Website: 
http://worldreminder.xyz/

# Ghid de utilizare:
La intrarea pe website vei avea un meniu de navigatie aflat pe partea superioara a paginii, fixat global pe website.

![Screenshot 2023-05-26 195549](https://github.com/AndreiBalan-dev/AroundTheWorld/assets/85957946/6f4656f3-6b4e-4881-9649-c79d70f5a073)

## 1) Around The World
Te redirectioneaza catre pagina de start.

## 2) Zone
Te redirectioneaza catre pagina de zone, unde vei avea acces la informatii legate de zonele din jurul lumii:

![Screenshot 2023-05-26 195849](https://github.com/AndreiBalan-dev/AroundTheWorld/assets/85957946/7f2558e8-f834-4ebf-bc68-b487b577217a)

## 3) Chat Online
Reprezinta pagina cu un mediu de comunicare global intre utilizatorii de pe website. Pentru a putea folosi aceasta functie va trebui sa te loghezi.
Autentificarea este verificata la intrarea pe pagina de chat prin intermediul API-ului creat cu Express, ce verifica validitatea sesiunii dintre client si baza de date.
Intrucat aceasta functionalitate este destul de complexa, am adaugat mai multe detalii tehnice in sectiunea "Informatii" sau pe documentul WORD.

## 4) Mai Multe

![Screenshot 2023-05-26 200351](https://github.com/AndreiBalan-dev/AroundTheWorld/assets/85957946/1ec7dc35-3afc-4772-ba31-00c89afd0272)

### a) Informatii
Aici gasesti informatii utile legate de website.
### b) Contact
Pagina cu detalii pentru contact.
### c) Noutati
Te redirectioneaza catre o pagina cu noutati legate de website.
### d) Github
O pagina cu un buton pe care poti da click pentru a fi redirectionat catre pagina de github, unde poti vizualiza codul sursa al proiectului.

## 5) Autentificare
Pagina pentru autentificare (necesara pentru functia de Chat Online).
Pentru a te autentifica, trebuie sa fii deja inregistrat in baza de date. 
Ai nevoie de numele de utilizator si de o parola.

## 6) Inregistrare
Pagina pentru inregistrare (necesara pentru creearea contului, inainte de autentificare).
La crearea contului, caracterele speciale sunt interzise, si este verificata prezenta unui nume de utilizator similar in baza de date.
Parola este incriptata la intrarea in baza de date prin metoda SHA256, iar codul este protejat imptriva vulnerabilitatilor de tip SQL Injection.
Pentru a te inregistra, ai nevoie de un nume de utilizator neexistent in baza de date, si de o parola.

**Atentie!!**

In cazul in care esti deja autentificat, in locul butoanelor de "Autentificare" si "Inregistrare" vei avea un mesaj de bun venit:

![Screenshot 2023-05-26 201155](https://github.com/AndreiBalan-dev/AroundTheWorld/assets/85957946/39b53522-d3a1-4994-a9fe-6f452adde79e)

Daca dai click pe acest mesaj, vei fi redirectionat catre panoul de utilizator, unde, momentan, poti doar sa iesi din cont:

![Screenshot 2023-05-26 201137](https://github.com/AndreiBalan-dev/AroundTheWorld/assets/85957946/32b331f5-3d30-46ff-a9ba-c7c49b485ce4)

## 7) Limba
Tot in bara de navigatie vei fi, de asemenea, intampinat cu un meniu de unde iti poti selecta limba, pentru a traduce pagina:

![Screenshot 2023-05-26 201437](https://github.com/AndreiBalan-dev/AroundTheWorld/assets/85957946/16fb426c-ebce-48f9-950b-df998739938d)

Limba selectata ramane salvata pentru fiecare sesiune, si traduce orice element aflat pe pagina, chiar si titlul paginii.
Adaugarea pe viitor a limbiilor uzuale poate fi facuta intr-un mod eficient, intrucat orice element text de pe website este structurat intr-un fisier de tip JSON.
Acest lucru permite utilizarea conditionala a functiei "render", pusa in functiune prin reinprospatarea automata a paginii dupa alegerea facuta.

# Precizari:
Au fost facute multe modificari ce permit utilizarea mai lina, mai eficienta si mai sigura a websiteului. Nu toate modificarile au fost mentionate, dar voi preciza cateva acum:
- Apararea impotriva vulnerabilitatilor -> esentiala si folosita pentru orice functie care transmite date catre server.
- Functii pentru utilizarea eficienta a chatului -> scroll ghidat, fiind automat daca exista diferenta de scroll de 1 mesaj, altfel nu vei primi scroll (intrucat utilizatorul poate doreste citirea istoricului), de asemenea scroll automat cand trimiti un mesaj. Scrollul este lin, placut.
- Aspect placut, website-ul fiind plin de animatii.
- Categorizarea eficienta a paginilor pentru o experienta cat mai placuta.

