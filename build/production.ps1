Push-Location ../src/server
dotnet publish server.csproj -f netcoreapp1.1 -o ../../dist --configuration Release
Pop-Location
Push-Location ../src/ui
webpack -p --config webpack.production.js --env.outputPath=../../dist/wwwroot
Pop-Location