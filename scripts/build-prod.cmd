@echo on
echo Started
SET CURRENT_PATH=%~dp0
SET BUILD_PATH=%~dp0%..\frontend\.

cd %BUILD_PATH%

call npm run build:prod

cd %CURRENT_PATH=%

echo Finished
@echo off