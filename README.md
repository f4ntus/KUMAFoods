KUMAFoods
Unsere Webanwendung informiert über den Fruktosegehalt, den Glukosegehalt und den Saccharosegehalt verschiedener Lebensmittel.

Verwendete Technologien
* HTML, CSS, Javascript, TypeScript, C#
* Frameworks (client-side): Angular, Bootstrap
* Frameworks (server-side): ASP.Net Core, Microsoft SQL Database

Installation
* Installieren Sie SQL Server Management Studio
* Installieren Sie.Net Core https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-3.0.100-windows-x64-installer
* Installieren Sie Node.js https://nodejs.org/dist/v12.4.0/node-v12.4.0-x64.msi
* Installieren Sie https://www.visualstudio.com/vs


* Öffnen Sie die Projektmappe ServerApp.sln, die sich im KumaFoodsDotNet Ordner befindet.
* Öffnen Sie die appsettings.json und geben Sie unter dem Punkt "DefaultConnection": "Data Source:" den Namen Ihres lokalen Servers an erster Stelle an. Diese finden Sie, wenn Sie SQL Server Management Studio öffnen.
* Im Projektmappen-Explorer öffnen Sie die Eigenschaftenseiten der ClientApp per Rechtsklick.
* Unter dem Punkt Erstellen entfernen Sie das Häkchen bei "Website als Teil der Projektmappe erstellen"
* Im Projektmappen-Explorer erstellen Sie eine neue Projektmappe per Rechtsklick auf Projektmappe „ServerApp“
* Öffnen sie die Developer Powershell über „Extras“ → „Befehlszeile“ und geben Sie die folgenden Befehle einzeln ein.
* dotnet tool uninstall --global dotnet-ef  
dotnet tool install --global dotnet-ef --version 3.0.0  
dotnet add package Microsoft.EntityFrameworkCore.Design --version 3.0.0  
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 3.0.0  
dotnet dev-certs https –clean  
dotnet dev-certs https --trust  
dotnet ef migrations add Initial 
cd Server App
dotnet watch run

Unsere Seite können Sie nun unter der nachfolgenden URL öffnen.
https://localhost:5001/
