-- Data for Users table
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Reinwald', 'Mival', 'rmival0@redcross.org', 'WSgh42mrmival0@reria0irrirr');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Avrom', 'Soppett', 'asoppett1@boston.com', '47DeDAqasoppett1@aoptoaaoaa');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Gracia', 'Haet', 'ghaet2@mac.com', 'x5De6ghaet2@gataagg');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Rutger', 'Headland', 'rheadland3@dell.com', 'Xrqfqrheadland3halhdahhr');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Say', 'Gunter', 'sgunter4@issuu.com', 'yAEEEU8elJsgunter4@sutsnusss');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Tabby', 'Pinchbeck', 'tpinchbeck5@soup.io', 'HTAIitpinchbeckpnhpcnppt');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Elicia', 'Rowes', 'erowes6@eventbrite.com', 'wGFNerowes6@eveeoe6reooree');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Cyrill', 'Robic', 'crobic7@github.com', 'svVmcrobic7@gcoicboccc');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Heinrick', 'Pollastrino', 'hpollastrino8@lulu.com', 'Ox3Rhpollastrinholsploophh');
insert into [emiller-azuretraining-db].dbo.Users (FirstName, LastName, Email, PassHash) values ('Josi', 'Girdwood', 'jgirdwood9@statcounter.com', 'U8wzjgirdwood9@stjidodiwigiijj');
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
insert into [emiller-azuretraining-db].dbo.Plans (Name, Price, DeviceLimit, DataLimit, UserId) values ('Smart Saver', 15.00, 2, 4, 1);
insert into [emiller-azuretraining-db].dbo.Plans (Name, Price, DeviceLimit, DataLimit, UserId) values ('Premium Plus', 40.00, 6, 50, 1);
insert into [emiller-azuretraining-db].dbo.Plans (Name, Price, DeviceLimit, DataLimit, UserId) values ('Further Beyond', 70.00, 20, 999, 2);

delete from [emiller-azuretraining-db].dbo.Users where UserId=12;