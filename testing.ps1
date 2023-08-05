# .SYNOPSIS
#   This is a synopsis of the module.  It should be a short sentence that describes the purpose of the module.
#   It should be no more than 10 words.  It should not include the name of the module.
#   It should not include the word "command" or "cmdlet".
# .DESCRIPTION
#   This is a description of the module.  It should be a short paragraph that describes the purpose of the module.
#   It should be no more than 80 words.  It should not include the name of the module.
#   It should not include the word "command" or "cmdlet".
# .PARAMETER
#   This is a parameter of the module.  It should be a short sentence that describes the purpose of the parameter.
#   It should be no more than 10 words.  It should not include the name of the parameter.
#   It should not include the word "parameter".
# .EXAMPLE 
#   This is an example of the module.  It should be a short sentence that describes the purpose of the example.
#   It should be no more than 10 words.  It should not include the name of the module.
#   It should not include the word "example".
# .INPUTS
#   This is an input of the module.  It should be a short sentence that describes the purpose of the input.
#   It should be no more than 10 words.  It should not include the name of the module.
#   It should not include the word "input".
# .OUTPUTS
#   This is an output of the module.  It should be a short sentence that describes the purpose of the output.
#   It should be no more than 10 words.  It should not include the name of the module.
#   It should not include the word "output".
# .NOTES
#   This is a note of the module.  It should be a short sentence that describes the purpose of the note.
#   It should be no more than 10 words.  It should not include the name of the module.
#   It should not include the word "note".


# Need to run these modules in elevated (admin) mode
# install the correct module for connecting to microsoft exchange online
Install-Module BetterCredentials
Install-Module ExchangeOnlineManagement
# connect to exchange online

BetterCredentials\Get-Credential -Force -Store -Message "Enter your credentials for Exchange Online" -UserName "steve.lapthorn@slap777.onmicrosoft.com"
$cred=BetterCredentials\Get-Credential -Message "Enter your credentials for Exchange Online" -UserName "steve.lapthorn@slap777.onmicrosoft.com"
Connect-ExchangeOnline -Credential $cred

Get-EXOMailbox | Select-Object DisplayName

Get-EXOMailbox -Identity steve.lapthorn| select -ExpandProperty EmailAddresses


