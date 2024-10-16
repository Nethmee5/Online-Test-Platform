@echo off

:: Check if a commit message was provided
if "%~1"=="" (
    echo Usage: git_push.bat "commit message"
    exit /b 1
)

:: Set variables
set "COMMIT_MESSAGE=%~1"
set "BRANCH_NAME=main"  :: Change to your branch name

:: Check if inside a Git repository
call git rev-parse --is-inside-work-tree >nul 2>&1
if %errorlevel% neq 0 (
    echo Not in a Git repository. Please run this script inside a Git repository.
    exit /b 1
)

:: Start SSH agent if it's not running
for /f "tokens=*" %%i in ('tasklist ^| findstr /I "ssh-agent.exe"') do (
    echo SSH agent is running.
    goto :skip_start_agent
)

echo Starting SSH agent...
start "" "C:\Program Files\Git\usr\bin\ssh-agent.exe" >nul
timeout /t 1 >nul

:: Add your SSH key (adjust the path to your key)
ssh-add "C:\Users\<YourUsername>\.ssh\id_rsa"  :: Adjust to your SSH key location

:skip_start_agent

:: Add changes
git add .

:: Commit the changes
git commit -m "%COMMIT_MESSAGE%"

:: Push the changes to the specified branch
git push origin %BRANCH_NAME%

echo Push successful.
