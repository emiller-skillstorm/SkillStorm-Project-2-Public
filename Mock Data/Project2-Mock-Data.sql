-- Data for Users table
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Reinwald', 'Mival', 'rmival0@redcross.org', '6Om24hgSW');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Avrom', 'Soppett', 'asoppett1@boston.com', 'HnqADeD74');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Gracia', 'Haet', 'ghaet2@mac.com', 'ah6eD5x');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Rutger', 'Headland', 'rheadland3@dell.com', 'L4qfqrX');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Say', 'Gunter', 'sgunter4@issuu.com', 'SgJle8UEEEAy');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Tabby', 'Pinchbeck', 'tpinchbeck5@soup.io', '9miIATH');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Elicia', 'Rowes', 'erowes6@eventbrite.com', 'nbNFGw');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Cyrill', 'Robic', 'crobic7@github.com', 'X0mVvs');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Heinrick', 'Pollastrino', 'hpollastrino8@lulu.com', 'ODR3xO');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Josi', 'Girdwood', 'jgirdwood9@statcounter.com', 'G2zw8U');
-- Data for PhoneNumbers table
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('2712102813', 9);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('4238347697', 10);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('9366270623', 1);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('5873106768', 1);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('5082348448', 6);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('4993640249', 3);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('9782867964', 11);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('4986233460', 8);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('4636594226', 3);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('9488961702', 9);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('4898712347', 5);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('5618347313', 4);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('8035487418', 11);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('6433477428', 1);
insert into [emiller-azuretraining-db].dbo.PhoneNumbers (PhoneNumberVal, UserId) values ('4014581567', 3);
-- Data for Plans table
insert into [emiller-azuretraining-db].dbo.Plans (Name, Price, DeviceLimit, DataLimit) values ('Smart Saver', 15.00, 2, 4);
insert into [emiller-azuretraining-db].dbo.Plans (Name, Price, DeviceLimit, DataLimit) values ('Premium Plus', 40.00, 6, 50);
insert into [emiller-azuretraining-db].dbo.Plans (Name, Price, DeviceLimit, DataLimit) values ('Further Beyond', 70.00, 20, 999);